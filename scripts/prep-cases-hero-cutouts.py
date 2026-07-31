"""
Build transparent cutouts + framed standing phone for /cases hero layers.

Outputs in public/images/cases/:
  - genba-phone-cutout.png
  - genba-phone-hand-cutout.png
  - genba-phone-framed.png  (complete rounded device; use as frontmost layer)
"""
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

CASES = Path(
    r"c:\Users\ryoji\00myapp\ai_demo_workspace\sites\ideal_official\public\images\cases"
)


def clear_near_black(im: Image.Image, hard: float = 18, soft: float = 40) -> Image.Image:
    arr = np.array(im.convert("RGBA")).astype(np.float32)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    brightness = (r + g + b) / 3.0
    sat = np.maximum(np.maximum(r, g), b) - np.minimum(np.minimum(r, g), b)
    alpha = a.copy()
    alpha[brightness < hard] = 0
    soft_bg = (brightness >= hard) & (brightness < soft) & (sat < 12)
    if soft_bg.any():
        fade = np.clip((brightness[soft_bg] - hard) / (soft - hard), 0, 1)
        alpha[soft_bg] = np.minimum(alpha[soft_bg], fade * 255)
    arr[:, :, 3] = alpha
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def clear_near_white(im: Image.Image, threshold: int = 248) -> Image.Image:
    arr = np.array(im.convert("RGBA")).astype(np.float32)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    mn = np.minimum(np.minimum(r, g), b)
    mx = np.maximum(np.maximum(r, g), b)
    a[(mn >= threshold) & ((mx - mn) <= 12)] = 0
    arr[:, :, 3] = a
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


def pad_content(im: Image.Image, pad_l=0.10, pad_t=0.08, pad_r=0.06, pad_b=0.06) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    content = im.crop(bbox)
    cw, ch = content.size
    pl, pt = int(cw * pad_l), int(ch * pad_t)
    pr, pb = int(cw * pad_r), int(ch * pad_b)
    canvas = Image.new("RGBA", (cw + pl + pr, ch + pt + pb), (0, 0, 0, 0))
    canvas.paste(content, (pl, pt), content)
    return canvas


def build_framed_phone(src: Image.Image, pad: int = 56) -> Image.Image:
    """Upright complete device frame; screen filled from source UI crop."""
    bbox = src.getbbox() or (0, 0, src.size[0], src.size[1])
    content = src.crop(bbox)
    cw, ch = content.size
    screen = content.crop((int(cw * 0.22), int(ch * 0.10), int(cw * 0.80), int(ch * 0.90)))

    W, H = 390, 800
    frame = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(frame)
    m, radius = 4, 54
    body = [m, m, W - m - 1, H - m - 1]
    draw.rounded_rectangle(body, radius=radius, fill=(22, 22, 24, 255))
    draw.rounded_rectangle(body, radius=radius, outline=(168, 170, 175, 255), width=2)
    draw.rounded_rectangle([0, 160, 3, 220], radius=1, fill=(140, 140, 145, 255))
    draw.rounded_rectangle([0, 250, 3, 310], radius=1, fill=(140, 140, 145, 255))
    draw.rounded_rectangle([W - 4, 220, W - 1, 300], radius=1, fill=(140, 140, 145, 255))

    inset = 12
    screen_box = [m + inset, m + inset + 16, W - m - inset - 1, H - m - inset - 16]
    draw.rounded_rectangle(screen_box, radius=40, fill=(0, 0, 0, 255))
    cx = W // 2
    draw.rounded_rectangle(
        [cx - 48, m + inset + 26, cx + 48, m + inset + 44], radius=9, fill=(8, 8, 10, 255)
    )

    sw = screen_box[2] - screen_box[0] + 1
    sh = screen_box[3] - screen_box[1] + 1
    fitted = screen.resize((sw, sh), Image.Resampling.LANCZOS)
    mask = Image.new("L", (sw, sh), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, sw - 1, sh - 1], radius=36, fill=255)
    frame.paste(fitted, (screen_box[0], screen_box[1]), mask)

    canvas = Image.new("RGBA", (W + pad * 2, H + pad * 2), (0, 0, 0, 0))
    shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle([0, 0, W - 1, H - 1], radius=radius, fill=(15, 23, 42, 55))
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    canvas.paste(shadow, (pad + 6, pad + 14), shadow)
    canvas.paste(frame, (pad, pad), frame)
    return canvas


phone_cut = pad_content(clear_near_black(Image.open(CASES / "genba-phone.png")))
phone_cut.save(CASES / "genba-phone-cutout.png", "PNG", optimize=True)
print("saved genba-phone-cutout.png", phone_cut.size)

hand = clear_near_white(Image.open(CASES / "genba-phone-hand.png"))
hb = hand.getbbox()
if hb:
    hand = hand.crop(hb)
hand.save(CASES / "genba-phone-hand-cutout.png", "PNG", optimize=True)
print("saved genba-phone-hand-cutout.png", hand.size)

framed = build_framed_phone(Image.open(CASES / "genba-phone.png").convert("RGBA"))
framed.save(CASES / "genba-phone-framed.png", "PNG", optimize=True)
print("saved genba-phone-framed.png", framed.size)
