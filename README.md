## 1) Interface এবং Type-এর মধ্যে পার্থক্য

TypeScript-এ Interface এবং Type—দুটোই কোডের স্ট্রাকচার নির্ধারণে ব্যবহৃত হয়, তবে এদের ব্যবহারের উদ্দেশ্য ও ক্ষমতায় কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

### Interface: প্রধানত অবজেক্টের গঠন নির্ধারণে

Interface মূলত অবজেক্ট, ক্লাস বা API রেসপন্সের কাঠামো প্রকাশ করতে ব্যবহৃত হয়।

```ts
interface User {
  id: number;
  name: string;
}
```

### Type alias: আরও বহুমুখী

Type alias শুধু অবজেক্টই নয়, union, tuple, primitive alias এবং function signature—সবকিছুতেই ব্যবহার করা যায়।

```ts
type Status = "success" | "error";
type Coordinates = [number, number];
```

### Interface পুনরায় ঘোষণা করলে merge হয়

TypeScript-এ একই নামে একাধিক interface তৈরি করলে সেগুলো merge হয়।
Type alias-এ এটি সম্ভব নয়।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}
// User এখন { name, age }
```

### Interface extend করা সহজ

Interface সহজভাবে extend করা যায়:

```ts
interface Employee extends User {
  salary: number;
}
```

**সংক্ষেপে:** Interface অবজেক্ট–কেন্দ্রিক, আর Type alias বেশি flexible।

---

## 2) any, unknown এবং never টাইপের পার্থক্য

TypeScript-এর এই তিনটি টাইপ ভিন্ন উদ্দেশ্যে ব্যবহৃত হয়। এদের সঠিক ব্যবহার টাইপ–নিরাপত্তার জন্য গুরুত্বপূর্ণ।

### any টাইপ: সম্পূর্ণ unchecked

যে ভেরিয়েবলে any টাইপ ব্যবহার করা হয়, সেটাতে যেকোনো ধরনের মান রাখা যায়, এবং TypeScript কোনো টাইপ–চেক করবে না।

```ts
let value: any = 10;
value = "Hello";
value = true;
```

any অতিরিক্ত ব্যবহারে টাইপ সুরক্ষা নষ্ট হতে পারে।

---

### unknown টাইপ: নিরাপদ any

unknown-এ যেকোনো মান রাখা যায়, কিন্তু মান ব্যবহার করার আগে টাইপ–চেক করতে হয়।

```ts
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase());
}
```

unknown টাইপ–নিরাপত্তা রক্ষা করে।

---

### never টাইপ: এমন মান যা কখনোই থাকে না

never সাধারণত এমন function-এর return টাইপ যা কখনো return করে না।
যেমন error ছুঁড়ে দেয়া বা infinite loop।

```ts
function throwError(msg: string): never {
  throw new Error(msg);
}
```

never নির্দেশ করে যে ওই function স্বাভাবিকভাবে শেষ হয় না।

---
