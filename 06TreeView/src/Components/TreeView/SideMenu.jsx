const SideMenu = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
    Children: [
      {
        label: "About Me",
        to: "aboutme",
        Children: [
          {
            label: "About You ",
            to: "aboutyou",
            Children: [
              {
                label: "About Us",
                to: "/aboutus",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    label: "Setting",
    to: "/setting",
    Children: [
      {
        label: "Name",
        to: "name",
      },
      {
        label: "User Name",
        to: "username",
        Children: [
          {
            label: "Good",
            to: "good",
          },
        ],
      },
    ],
  },
];

export default SideMenu;
