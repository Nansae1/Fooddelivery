const menu = [
  { id: 1, title: "Appetizers" },
  { id: 2, title: "Salads" },
  { id: 3, title: "Pizzas" },
  { id: 4, title: "Lunch favorites" },
  { id: 5, title: "Main dishes" },
  { id: 6, title: "Side dish" },
  { id: 7, title: "Brunch" },
  { id: 8, title: "Desserts" },
  { id: 9, title: "Beverages" },
  { id: 10, title: "Fish & Sea foods" },
];

export const Footer = () => {
  return (
    <div className="w-screen h-188.75 flex flex-col gap-19 bg-black py-15 items-center justify-center">
      <div className="flex flex-nowrap items-center w-full h-23 bg-red-500 gap-8.5 pl-24.5 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <p key={index} className="text-3xl text-white whitespace-nowrap">
            Fresh fast delivered{" "}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-26">
        <div className="flex gap-55">
          <img src="/Logo=Vertical.png" className="w-22 h-23" />
          <div className="flex gap-25.5">
            <div className="flex flex-col gap-4">
              <p className="text-[#71717A]">NOMNOM</p>
              <p className="text-white">Home</p>
              <p className="text-white">Contact us</p>
              <p className="text-white">Delivery zone</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-[#71717A]">MENU</div>
              <div className="grid grid-cols-2 h-46 ">
                {menu.map((item) => (
                  <p className="text-white" key={item.id}>
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[#71717A]">FOLLOW US</p>
              <div className="flex gap-4">
                <img
                  src="/Property 1=Facebook.png"
                  alt=""
                  className="h-7 w-7"
                />
                <img
                  src="/Property 1=Instagram.png"
                  alt=""
                  className="h-7 w-7"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-21 w-316 flex gap-12 border-t border-[#52525B] pt-6">
          <p className="text-[#71717A]">Copy right 2024 © Nomnom LLC</p>
          <p className="text-[#71717A]">Privacy policy</p>
          <p className="text-[#71717A]">Terms and conditoin</p>
          <p className="text-[#71717A]">Cookie policy</p>
        </div>
      </div>
    </div>
  );
};
