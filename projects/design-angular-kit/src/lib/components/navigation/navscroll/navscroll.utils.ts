import { NavscrollItem, NavscrollItems } from './navscroll.model';

function searchFn(items: Set<NavscrollItem>, item: NavscrollItem): Array<NavscrollItem> {
  //ricerca
  const nodes = Array.from(items);
  const parent = nodes.find(i => i.childs.includes(item));
  const ancestors = parent?.childs?.length ? searchFn(items, parent) : [];
  return [item, ...ancestors];
}

function flattenNavscrollItemsFn(items: NavscrollItems): NavscrollItems {
  const result: NavscrollItems = [];

  function flatten(items: NavscrollItems): void {
    for (const item of items) {
      result.push(item);
      if (item.childs && item.childs.length > 0) {
        flatten(item.childs);
      }
    }
  }

  flatten(items);
  return result;
}

export const search = searchFn;
export const flattenNavscrollItems = flattenNavscrollItemsFn;
