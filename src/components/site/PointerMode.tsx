/**
 * Tracks which input device is actually driving the page and records it
 * as `data-pointer="coarse"` (touch) or no attribute (cursor) on <html>.
 *
 * Why not a media query: `@media (hover: hover)` / `(pointer: fine)` on
 * iPadOS always report "touch, no hover" — Safari does not update them
 * when a Magic Keyboard trackpad or a mouse is connected. Pointer events,
 * on the other hand, do carry the truth: the trackpad cursor fires
 * `pointerType: "mouse"`. The hover variant in globals.css keys off this
 * attribute, so hover states work on iPad with a cursor and still don't
 * stick after a tap on a phone.
 *
 * Rendered as a blocking inline script so the attribute is correct before
 * the first interaction can be styled — the handler runs synchronously
 * during the pointerover that precedes any :hover paint, so a tap never
 * flashes a hover state.
 */
const script = `(function(){
  var el = document.documentElement;
  function sync(type) {
    if (type === "mouse") el.removeAttribute("data-pointer");
    else el.setAttribute("data-pointer", "coarse");
  }
  function handle(e) { sync(e.pointerType); }
  if (window.PointerEvent) {
    window.addEventListener("pointerover", handle, true);
    window.addEventListener("pointerdown", handle, true);
  }
})();`;

export function PointerMode() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
