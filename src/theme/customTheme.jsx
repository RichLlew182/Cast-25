const CustomTheme = {
  navbar: {

    root: {
      inner: {
        base: "w-full flex flex-wrap items-center justify-end mx-0",
      },
    },

    collapse: {
      base: "nav w-full xl:block xl:w-auto",
      list: "my-0 h-full flex flex-col justify-center xl:my-0 xl:flex-row xl:space-x-10",
      hidden: {
        "on": "",
        "off": "open"
      }
    },

    toggle: {
      base: 'text-white hover:bg-blue-700 focus:ring-blue-300', // Custom styles for toggle button
    },


  },
  progress: {
    color: {
      red: "bg-tomato",
    },
  },
  carousel: {
    root: {
      leftControl: "controls prev absolute left-0 top-0 flex h-full items-center justify-center px-0 focus:outline-none",
      rightControl: "controls next absolute right-0 top-0 flex h-full items-center justify-center px-0 focus:outline-none"
    },
    indicators: {
      active: {
        off: "bg-licorice",
        on: "bg-tomato"
      },
      scrollContainer: {
        base: "flex h-full snap-proximity overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
        snap: "snap-x"
      }

    },
  }
  // Add other component custom themes here
};

export default CustomTheme

