from pathlib import Path
from PIL import Image
import numpy as np

src = Path(
    r"c:\Users\ryoji\00myapp\ai_demo_workspace\sites\ideal_official\public\images\cases\cases_hero.png"
)
out = Path(
    r"c:\Users\ryoji\00myapp\ai_demo_workspace\sites\ideal_official\public\images\cases\cases_hero_visual.png"
)

im = Image.open(src).convert("RGBA")
w, h = im.size
arr = np.array(im)

# Find the vertical white gutter between text and device collage
# by locating the widest near-white band in the middle third.
best = None
x = int(w * 0.28)
end = int(w * 0.55)
while x < end:
    col = arr[:, x, :3]
    white_ratio = float(((col > 246).all(axis=1)).mean())
    if white_ratio > 0.965:
        x0 = x
        while x < end:
            col = arr[:, x, :3]
            if float(((col > 246).all(axis=1)).mean()) <= 0.965:
                break
            x += 1
        width = x - x0
        if best is None or width > best[2]:
            best = (x0, x, width)
    else:
        x += 1

if best and best[2] >= 8:
    crop_x = best[1] - 4  # start just after gutter
else:
    crop_x = int(w * 0.40)

print("crop_x", crop_x, "best_gap", best)

visual = im.crop((crop_x, 0, w, h))

# Make near-white background transparent for soft blending
v = np.array(visual).astype(np.float32)
r, g, b, a = v[:, :, 0], v[:, :, 1], v[:, :, 2], v[:, :, 3]
mn = np.minimum(np.minimum(r, g), b)
mx = np.maximum(np.maximum(r, g), b)
white = (mn >= 248) & ((mx - mn) <= 10)
near = (mn >= 240) & ((mx - mn) <= 14)
a[white] = 0
soft = near & ~white
if soft.any():
    fade = np.clip((248 - mn[soft]) / 8.0, 0, 1)
    a[soft] = np.minimum(a[soft], fade * 255)
v[:, :, 3] = a
out_im = Image.fromarray(v.astype(np.uint8), "RGBA")

# Trim fully transparent margins
bbox = out_im.getbbox()
if bbox:
    out_im = out_im.crop(bbox)

out_im.save(out, "PNG", optimize=True)
print("saved", out.name, out_im.size)
