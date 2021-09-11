# Generic을 활용한 컴포넌트 추상화

Render Props를 공부하는데 제네릭을 이용해서 컴포넌트를 추상화할 수 있을 것 같다는 생각을 했다. 제네릭은 보통 추상화할 때 많이 사용하니까.

```tsx
import React from 'react'

type Props<TItem> = {
  items: TItem[]
  renderEmpty: () => React.ReactElement
  renderItem: (item: TItem) => React.ReactElement
}

function List<TItem extends { name: string }>({ items, renderEmpty, renderItem }: Props<TItem>): React.ReactElement {
  if (items.length === 0) return renderEmpty()

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}

export default List

```

물론 화살표 함수도 된다.


```tsx
const List = <TItem extends { name: string }>({ items, renderEmpty, renderItem }: Props<TItem>): React.ReactElement => {
  if (items.length === 0) return renderEmpty()

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>{renderItem(item)}</li>
      ))}
    </ul>
  )
}
```

이런 고민을 나만 한 게 아니었다.<br />

[React Components as TypeScript Generic Functions](https://javascript.plainenglish.io/react-components-as-typescript-generic-functions-8aa83afff597)
