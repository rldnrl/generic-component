import React from 'react'

type Props<TItem> = {
  items: TItem[]
  renderEmpty: React.ReactElement
  renderItem: (item: TItem) => React.ReactElement
}

/**
 * 
 * @param items
 * @param renderEmpty
 * @param renderItem
 * `name`이 기본으로 들어가는 객체를 담는다.
 * 
 * ex)
 * ```ts
 * const items = [
 *   {
 *     name: "Cpp",
 *     age: 23,
 *   },
 *   {
 *     name: "Python",
 *     age: 45,
 *   },
 *   {
 *     name: "Java",
 *     age: 40,
 *   },
 *   ...
 * ]
 * ```
 * @returns ReactElement
 */

const List = <TItem extends { name: string }>({ items, renderEmpty, renderItem }: Props<TItem>): React.ReactElement => {
  if (items.length === 0) return renderEmpty

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default List
