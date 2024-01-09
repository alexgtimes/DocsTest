---
sidebar_position: 2
sidebar_label: FAQ
---

# Introduction
We see a lot of questions asked that can be answered just by reading our documentation. Our community has gathered our most frequently asked questions and compiled them into a list.

:::info
This FAQ is only for JSM products. Please visit our main [information & FAQ](https://support.whitehill.club/docs) for more generalised queries.

### How do I add more tools? {#add-tools}
These instructions are for our mainbank tills. For SCO v3, use [this guide](./sco-v3/installation#7).

To add a tool, you need to go onto the `MasterConfig` & generate an EAN number, this can be a randomised number. Make it a billion characters, or whatever you want; it doesn't matter as long as it is unique. Once you have created the unique number, make sure you've filled in the details with the new tool using the `MasterConfig`.

Create a `StringValue` in the tool's handle, name the `StringValue` EAN, and place your unique number into its value.

### Why are my products becoming unanchored once rotated in-game? {#unanchored-products}
If you're using the F3X plugin in studio, it tends to have a habit of breaking the welds - so please don't use them when working with our products. If you're using the usual method on studio of rotating, ensure you have selected everything inside the group of the product so the welds aren't automatically deleted.

### Some of my POS tills are linked together, how do I fix? {#linked-together}
This only applies for our mainbank tills.

One common mistake is that people forget to change the unique till number. You need to do this by clicking on an individual POS, then click onto the JSM | POS Terminal model, then the Screen block, then Settings. You can also change if you want the till to be on, off, or boot upon server start.

If you don't do this, scanning an item might link to another till, or logging in, etc.

### I can't click login, it won't do anything. {#cannot-click-login}
This only applies for our mainbank tills.

Same as above, there's only a player whitelist integrated, so you'll have to disable the whitelist as a whole if it's for a group. Do not ungroup.

### I scanned an operator barcode, and it says "unexpected item", why is this? {#unexpected-operator-barcode}
> You cannot directly give yourself the tool via an admin system as the barcode isn't configured with the correct values.

* Ensure the operator barcode has been placed in the `ServerStorage` without being renamed.

> Alternatively, you can make the operator barcode already configured in `ServerStorage` rather wasting time printing the barcode. This will let you give the barcode to yourself or to staff automatically.

* Enter Roblox Studio, find the operator barcode & click on it, opening the handle.
* Modify child `OperatorID` to your Colleague ID you'd like to use for logging in to the machine.
* Modify child `SecurityKey` to the passcode of that Colleague ID, remember, Colleague Identification is basically the same as typing in the pin on the machine manually like you'd do for roleplay.