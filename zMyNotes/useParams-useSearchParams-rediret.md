```jsx
// src/app/cart/page.jsx
"use client";

import { usePathname } from "next/navigation";

export default function CartPage() {
  const pathname = usePathname();
  console.log(pathname);

  return <h1>CartPage</h1>;
}
```

```jsx
// src/app/account/page.jsx
import { redirect } from "next/navigation";


export default function AccountPage() {
  
  // assume that profile info is 'null'
  const userProfileInfo=null;

  if(userProfileInfo === null){
    redirect('cart?search=product1');
  }
  return <h1>AccountPage</h1>;
}
```