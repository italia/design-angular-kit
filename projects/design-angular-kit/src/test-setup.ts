// jsdom does not implement some browser APIs used by bootstrap-italia (progressbar.js, splide).
const svgProto = (globalThis as any).SVGElement?.prototype;
if (svgProto && !svgProto.getTotalLength) {
  svgProto.getTotalLength = () => 0;
  svgProto.getPointAtLength = () => ({ x: 0, y: 0 });
}

if (!globalThis.matchMedia) {
  globalThis.matchMedia = ((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => false,
  })) as typeof globalThis.matchMedia;
}
