from pathlib import Path
from PIL import Image
import numpy as np

src_dir = Path(
    r"c:\Users\ryoji\00myapp\ai_demo_workspace\sites\ideal_official\public\images\cases"
)

files = list(src_dir.glob("*.png"))
for f in files:
    print(repr(f.name), f.stat().st_size)

by_size = {f.stat().st_size: f for f in files}


def pick(size: int, tol: int = 5000) -> Path:
    for f in files:
        if abs(f.stat().st_size - size) <= tol:
            return f
    raise FileNotFoundError(size)


phone = pick(602297)
hand = pick(1564203, tol=50000)
desk = pick(560555)
print("phone", phone.name)
print("hand", hand.name)
print("desk", desk.name)


def white_to_alpha(im: Image.Image, threshold: int = 242, soft: int = 14) -> Image.Image:
    im = im.convert("RGBA")
    arr = np.array(im).astype(np.float32)
    r, g, b, a = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2], arr[:, :, 3]
    mn = np.minimum(np.minimum(r, g), b)
    mx = np.maximum(np.maximum(r, g), b)
    white = (mn >= threshold) & ((mx - mn) <= 18)
    near = (mn >= threshold - soft) & ((mx - mn) <= 25)
    alpha = a.copy()
    alpha[white] = 0
    soft_mask = near & ~white
    if soft_mask.any():
        fade = np.clip((threshold - mn[soft_mask]) / soft, 0, 1)
        alpha[soft_mask] = np.minimum(alpha[soft_mask], fade * 255)
    arr[:, :, 3] = alpha
    return Image.fromarray(arr.astype(np.uint8), "RGBA")


phone_out = white_to_alpha(Image.open(phone))
phone_path = src_dir / "genba-phone.png"
phone_out.save(phone_path, "PNG", optimize=True)
print("saved", phone_path.name, phone_out.size)

desk_img = Image.open(desk).convert("RGBA")
desk_path = src_dir / "genba-desktop.png"
desk_img.save(desk_path, "PNG", optimize=True)
print("saved", desk_path.name, desk_img.size)

hand_img = Image.open(hand).convert("RGBA")
hand_path = src_dir / "genba-phone-hand.png"
hand_img.save(hand_path, "PNG", optimize=True)
print("saved", hand_path.name, hand_img.size)

print("done")
