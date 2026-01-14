// constants.ts

import { INavItem, SortyItem, SwitchAccountItem } from "./types";

export const NAV_ITEMS: INavItem[] = [
  { icon: "home", Text: "Home" },
  { icon: "search", Text: "Search" },
  { icon: "explore", Text: "Explore" },
  { icon: "reels", Text: "Reels" },
  { icon: "messages", Text: "Messages" },
  { icon: "notifications", Text: "Notifications" },
  { icon: "create", Text: "Create" },
  { icon: "profile", Text: "Profile" },
];

export const BOTTOM_NAV_ITEMS: INavItem[] = [
  { icon: "thread", Text: "Thread" },
  { icon: "more", Text: "More" },
];

export const INSTAGRAM = "Instagram";

// Example story items
export const STORY_ITEMS: SortyItem[] = [
  {
    src: "https://w7.pngwing.com/pngs/407/726/png-transparent-cartoon-school-cartoon-child-child-photography-hand-thumbnail.png",
    Text: "Kitten Story 1",
  },
  {
    src: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8zM18zZF9zdHlsZV9jdXRlX3NpbXBsZV9zdHVkZW50X2JveV9pc29sYXRlZF9vbl85ZGMxZDI1Ny1kYjY0LTRjNWUtYjFjMi05NTk4ZmU4MTE5OTcucG5n.png",
    Text: "Kitten Story 2",
  },
  {
    src: "https://image.similarpng.com/very-thumbnail/2020/07/Happy-boy-cartoon-on-transparent-background-PNG.png",
    Text: "Kitten Story 3",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoqbiGC9Y3kIg7nS0uIZLvFnWTHA0UI2THYST_FpPilGfb2QHcCm4GbH3_Q&s",
    Text: "Kitten Story 4",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOYHBJnSo26Y5xvjGgWRv9RoKvs_6-p1ul6oWl_-JbJRHQYFee5oBAybZFw&s",
    Text: "Kitten Story 5",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxpE6d2OtSIt2_Jn-56cbAzuoX0yypsq7KA&s",
    Text: "Kitten Story 6",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8eehXuZ2OLRngV145-Ay6G--dZVWK864gg&s",
    Text: "Kitten Story 7",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyzu8UfeKzbYm9Qbos1KNrBTKcUvl5C6MjA&s",
    Text: "Kitten Story 8",
  },
];

export const ACCOUNT_ITEMS: SwitchAccountItem[] = [
  {
    src: "https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg",
    Text: " prem",
  },
  {
    src: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNi0zOTcucG5n.png",
    Text: " prem",
  },
  {
    src: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    Text: " prem",
  },
  {
    src: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8zNF9waG90b19vZl9hZnJpY2FuLWFtZXJpY2FuX3dvbWFuX2NvbXBhbnlfd29ya19kNmM4MmJhNS1iYjA2LTRkN2EtYjJlMy1hNDZhNDYyMjA0ZmZfMS5qcGc.jpg",
    Text: " prem",
  },
  {
    src: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABAEAACAQIEAwQIAwUGBwAAAAABAgMAEQQFEiETMUEGIlFhBxQjMnGBkaFCUmIzgrHB0SRDcsLh8BUWNHOSovH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAcEQEBAAMBAQEBAAAAAAAAAAAAAQIRMQMSIUH/2gAMAwEAAhEDEQA/APa5HVlIU3JoIhwyS+1xtelwuH3yQbb2Ap/29rXW29A0qmRiVFxR614ekEXta1CJOCNB3IPOlwyDrBv1tQNECjXcWFutKUcRgU7w8RTluMNI7tt996QbgLYjVv0oCVlEekkA2tao4lKMC4sPE05iLe0uADva1Ez8XuAW8yaBpfaW0b28Kpe0varK+y2BWXMpGMrA8LDxC8kp8h/Orkew/Vq8BavLu33ZaftL24jaKaOBFy1PaMNZUiRx7vI8/tUyumscfq6cOM9MsiRouFyeKPEnccbEFlF+QsoH3PyrQZJ6VMmzKGOLNj/w/GXsym7x/EN4b9apj6LMry3AGSbFYiecbmQm2/kBXlefZYMmzBoY5C4PMsO8ot7p8R/SuePpLl8umXlZj9Pq2F1EY7w33Fjfah0niBrbar3+dZ/0eyz5h2KybEYk2l9VVCSPe03UH4EAGtFxNjGBv7t711cTyMHAC779KaEiIEP3SfGkF4B1E6ulK3HAYG1ulALKzOWAJHjUkjB0KqbnwFNxNHcK8trimWMxHWSDt8KCPhN+U0qk9Y/SfrT0ArIzkK1rHnSkHBuU5mjk0aCEtfpahiuD7TryvQJVEoDuLm1QNixfSd1vY6RyqWXUW9mDbyFcWJidAN9r812tXP0tk3HTzkt1UmLlj9WL4aQhiwBK8wK7EUTDU4+lUWJglkwsoisHuLauoBv97VZQ42HGE+qyAsnvoNivyqeedy3avphMdSOniMraBbSNqJkEY1qLtTqV0b21WqNNQe73011chR3mB12sPCs32ly7GevLj8rnaKdIDEU0KRLuGXVcX235W51pJrkgRj42rhzd3hyx5EZFdLEl9gBfck/C+/zrGc3jW/O6yjJ9oGzTMhHho5BHw4RLNFHIU4jH8JYbgbcwRzryntxksmHmw9wyys99LOX0AjcXO5AI6716XmTY/DZymKSUFGGmRGCqiKBzJBub86xCTrnHbHCxHEAYeTFBFkG91uf48vnXj8/q57e/0mEwewdiRNhuyGTwOgQx4REA8VAsp+YAPzq9MalRIfe5/GmhCIlmAFtgD0FD3g5O+gG/yr3R82nRjMSr2IFKQ8HaOwFFJbSOHbV5U0NgvtBZr9aodUVl1m9yKFHaU6XtbypnD6zpPdvt4VI5XT3LX8qBcBPA/WnqC0v6vrTUEixlDqa1hvTueN7l7r40wlMndstjSYcAi34tqBwywjQ/x2oTEffNivO1GqCUB25nah4hJ4fyvQV2acOHDMYtYLMBz2HWqN8MHZZULpInuSIbMvzFarE4eIxFZV1q2xBqnmyuaMGXDAyRg7rfvD+tZ+ZONfW+uXBZ3PhhozRXlcOF1xINxfmRcfatDh8ZBmEV8PIG3O3VSOYNZiYCVbgb+HWq7EZeWzEKjSxLKGmZ43K94FRbb43t1t5U3o+W9U8H3rd7wqlznNeFM2Hw41OR3za+m/S3iedVfrePw6s0mNmlAdgoYjcE90cugA3+JrkxOMhyjBT5jjXvHCOJMSbEi/LzJuAB1JA2q/wk1f1Xdock7Q5thxleEZDAtrljosPBj/SgwPYrCdmsC2JxMq4rNXW0b2sFP6BzAF+fOrT0SS5riOy0uMzSQNHisTJJhEJJ4SHmCfy6r28vpVnjV4svEYmWQqdPdtqP8hWMMJjHTL0ubq7MY2XG5fHBipQcdh1EcpbnIANn+YtfzvV7xFtwt7nu1kJcLNGkb4aYx4qPfiqALnr8j4eG3StDlmNhxkdy6jExrqeMHl8PKtuVjsVTD33+G1J145unIbb0lbjHS3K16dm4Oy733qocSKi6N7ihVDCdbWtysKIRh7OSb0Kycc6GFh5UB+sJ4N9KVN6uPzNSoCdVCkqADUcN3J4m9htemWNkYMw2HPeikPFsI+m5oBkLK5CbLba1SWUJewDW6UyERqFfnQBGVtf4b0DxEu1pNxbrSlJR7JcC3SilImW0fO9NGwiXTIbG9Bz4jL8Pi01OCrke+psfn41SYrLcYoAjAlUHulRZlPzrQNGzMWHIm4qSRlkUohBJ6VNLusSwmadExMRVxe99rcqynpXlxEkuRdmMEL4jGyCWVV53LBEFvC5Y/umtviphJmLEiwM6RL8dQUfc3rM5ZEM99N2aYxyGhyaFY4vJtGn52Z5ft4VFrbLhoMlyjCZVhFCxQxLGLflA/mar0lM0zMv7KNyi/qYbE/Ach538BQ57j7yiOKURSztw42uLoOrAeIHLzIpoAkQSONQkMa6UUclUCwFKsgsfOUwsnf0kqe9+XpesBNm+JyvNExakieBlbntMnJvkdwfCt1iCskXirrf5GvOs8j4EjYWYExMSYpPyVmrHuKSxzYWLEYf3JFDqfIi9SRAMDrAO+xNUfYh2/wCVcrlmbUxw6gsKupFMhBToN66OdMzMHIUm3hRygIl0AB8qdXUKEPOo40aJtUnu2oB1yeJpVPxo/wA32pUAcTidzTa+170rcDfnq2onjVFLLzHKhjPF98e7QMYxMS4Nr7U4kv7Pl0vTSM0R0Ja3nRmNAuu2/OgHTwO9z2tS08bvXt05XpomMp0uNudKRjEbJyoHEmjuWvp2JvUeI/ssEk1/cUnlUwRSusjc71UZ9iW9VWG/7Rt/gP8AYqUZzCyg9osowzMAqmXFyr+hEKj/ANnB+VUfohkbE47tXnTt+1mPIebNe/wIoHzIw5r2nzRdzlmTSQR7/iJF/qVt8qsfQvhRD2BnfTczYiYf4gqhbfY0jVQ42YvNiswOrRh5Fw6eBA3kb6sB+4KssROwwEpi5mM6a5Xw4Xs4sKjvPCHc25swuT9TXLkOK9ZyuLV73DsT9qy1FxFJfL8M/wCHhID8NIrM9qcLxcMwG5F3Q/yrR4LScAii50jQV8un2tVXihxI3wkp9og1RH84orRejKz9kYIgxNpZDub2717fetUCIDb3r73rD+il5I8qzGA8osZdL9AyLcfUE/OtzGomW8m58q1OOd6Rj13cHnSL8XuWt1vQtIVcoo7oOwqRkEa6l2NVA8D9X2pUHHfxpqAkDBhqBt1vRTHUDwzfxtTmUSqVAIJ23pkHAN2sb+FAUZAWz87detRAMHB3C3pynHOocjt8KPiAjhgb8t6BS2ZbR7t5UoyFW0lgfOmVeD3m36d2mYcfvLYf4qBiG16gDpvcVmu0eMVZp5yRw4EOkdNt/wCO1aPE4kYfDyEgkou3gT0+9ecZtO+OdsPhJhpVzxiovdr8r8tiDfz+FStYxk81lkg7H59NMzCTGSYSIHlc8Uu32U16L6H4uH6P8tDAe1eeT4gyvb7CsD6R4jguyuBhc96THB2v+mJx/mr0/wBHsK4fsLkUYtYYGMm3iRc/xNIVWYvCvgkbCzElQzBD4pclfsbfKshl7nL8XJhzcI5JT616V2ng4mEWYe8hI+tef5lhxiITbusPdbrWa1L+LfLZJ5pZY8JCHRCCxZ9I3H+lR5tFdkEh4MqEmOW99J8Daubs7lmKmQY58S0JAMfC2CzC9u9cHryt51D2jxUOFxIiFjiFsXKttYjlfx61FX3o2k/tudIw0ENCzr0Vjq5fGxrbTAlvZg/EVi/Rrg74bMcegZVxcqqisbi0YNz/AOTMP3a2qkQCxvvvW5xzvRKVEdmNz96jjDK15BYedOY2dtewB3ojIJe4Ab+dVB64/EU1Rert4rSoDaMRjUvMUyHje903FqGMsz2bUR5mil7unR3b87UCdzEdK8vOn4YC8Te9r08QDIC4BPnUali9rnTflQOjGbuvy57UnYw2VOXnRSgBfZ7G9rimiAZTxdzfmaDC+lHOcTg8Hhsuy0suLx12aVCe4gsDY9CSdj5E9Kr/AEe5ckGXmOUd+ORlAv0Nj/M/StL2typcViIMcVZvVwyWUdDYg/UfeuHs5w48ZiYjYB1VrX5EG3+b7Vm9bnHnXpizOCTHYfLI768JqklNgFGoCwHnYX+db/Lu3eQ5b2bwDsy4cKiwcEOGVGAPdLDb8JP/ANFZ/wBJnZCDNcxix2GnZJHSOKUWBB71gfj3t6gy30cYJMDJhcTiMTJFMyyEBkTSVvaxseYO/wAOlWGnfnXpXykRmJLSozAPoiclVuLm5AB28L1GAXd8OjsXWZo+7ueY3Hyrqi7CdmsvjLx5WmIk/D63I0wJ+BNh57XtVngcrGWSYmdGaWaa3S1gFA2HmRf6eFSkSYmbC4XCM8LdyNdQRVN7Af0BrHZnIM4xmGTL4j6w5EYvtrJIA+laB8fFJqnhGqL3jv73jVf6OJMFie1WNUqBPHA0sCg+6Sd7ediPr51la9LyzAR5Tl2Gw0G6xIEv4nqfmb11IOOLuTt4U0ZLHvm4t1pTdxgI+6LdK6OZGRlbQLWomRYgXTn506qpUEgFj1qOMsXAckqRyNAuO/l9KVTaYvBfpTUAtIrgqt7nltQp7EkuOfK1Pw+GNd723tSHt7Ai1jzoGdOK2pbFbdRRcRWTQNja1jTF+CNPO1Lh/wB5e9t7UDRjgnU+wt03pSAzHUguLeNqQbj90jT1pyxh2A1UC1pp4bbm1iCNq5sPgMPhZDKMNErHmyqK6RGG9pci+9qbXxTwyLUGbzZ0kzJwd0MgDX8lv/EUKRqo7u6dL9K4Me4nllNnPtC4ZeQ3vUmFnbhDvLInMEGsukds2klSTsOd+v8Au1vnWezfO4cJMY8XMkKEgI7Na/Sx+tWGNxVk5AeV96xPaDCRT4jDy44a4hOqaSPwna/3rNWajnzrMmwEM8UKW4x7xO/PkOfX+FQ+j7ESYTthgMY5GiaXhObWuH7oA/e0Usf2YaJlhDsYIriNSdgPLwrpwuGbD4e2GUtNqXhqi3YEEEED6fSkK9xdhMtk535EUkIhurbXPSo8O14I5yrAyKGKNtpuL2qQe33vbpYV0cgmNmYuLEfGjdxKpVNz9KHiaO5p5bXp9HCGoG5oA4En5fvSovWP0j60qBK7OQrcjz2p5bR20beNE7IylVIueVqGIFCeJtcdaB41WRQzi7UHEbWFPuk25UpAXe6A28qkLro0jdqBpAIxePY0o1Ei3k50MYKHVJsLW3pSAubx3K+VAxdg+ke70occeBhJZY7BwhsTUqsgUKxGobGuTGo/qk+sH3DzpRicThJ8TEFbEBYx+FRb71zZfEMFLPh4zeEtrQDobC4+F9/matCqsg1bi23QVU5pMMKYJlI0hrAKPE2Px/0rDo7ghc3k3Y1n+0io6mNh7PQQxHS/M/YVfwPqZmZr1RZrGZBJffUDUVcdhLZ7FjWzaFHkw0ix2S6g93mbHet5hstwWCivhMLDAbf3a6d6xXokmi9VzJWYcXiIWHlptf7VutLatVjpvfnW455dKNjIxVzsKeUmLaPYWvtRS2ZdMe557UoiIxaTruL1UJVVkDnn40MbM7aX5UxVmYkA6TRuwdbIQW8qAuDF4felUHDk8GpUCi/aL8amxCghb9DSpUCi7qWFRqBxfnSpUBYo2QW8aLCj2XzpUqCCT9sfjR5h/wBHN/2z/ClSqVWMH7JR0qk7REiMW6XpUqy6DylycDHc8o7fS9R4tQYiTzApUqgL0X93O8xQe62GBI8w5A/jXqhUcO36bUqVax4xl1DAArXHhSn7xBNKlWmUq7RbdBXPhv2vOlSoOu1KlSoP/9k=",
    Text: " prem",
  },
  
];
