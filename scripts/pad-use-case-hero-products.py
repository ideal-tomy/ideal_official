"""
Pad use-case-hero-products.png with transparent margins so the
left phone is not flush against the canvas edge.

Idempotent: skips if the canvas already has a transparent left margin.
"""
from pathlib import Path
from PIL import Image

SRC = Path(
    r"c:\Users\ryoji\00myapp\ai_demo_workspace\sites\ideal_official\public\images\use-case-hero-products.png"
)

# Plan: left 7%, top 5%, right 4%, bottom 4%
PAD_L, PAD_T, PAD_R, PAD_B = 0.07, 0.05, 0.04, 0.04


def leftmost_opaque_x(im: Image.Image) -> int:
    px = im.load()
    w, h = im.size
    for x in range(w):
        for y in range(0, h, 4):
            if px[x, y][3] > 8:
                return x
    return 0


im = Image.open(SRC).convert("RGBA")
w, h = im.size
opaque_x = leftmost_opaque_x(im)
min_left = int(w * (PAD_L * 0.7))  # already-padded threshold

if opaque_x >= min_left:
    print(f"skip (already padded): {w}x{h}, leftmost opaque x={opaque_x}")
    raise SystemExit(0)

pad_l = int(w * PAD_L)
pad_t = int(h * PAD_T)
pad_r = int(w * PAD_R)
pad_b = int(h * PAD_B)

new_w = w + pad_l + pad_r
new_h = h + pad_t + pad_b
canvas = Image.new("RGBA", (new_w, new_h), (0, 0, 0, 0))
canvas.paste(im, (pad_l, pad_t), im)
canvas.save(SRC, "PNG", optimize=True)
print(f"padded {w}x{h} -> {new_w}x{new_h} (L{pad_l} T{pad_t} R{pad_r} B{pad_b})")
