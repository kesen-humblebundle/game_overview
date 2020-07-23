const defaultState = {
  product_id: window.location.pathname,
  open: false,
  genre: ['RPG'],
  steamDesc: 'Mixed',
  overview: {
    platforms: [
      'https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransWhite_jqsk2l.png',
      'https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransMed_a8lxui.png',
      'https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/SteamTransDark_gqamod.png'
    ],
    os: [
      'https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransWhite_jyl6ij.png',
      'https://res.cloudinary.com/overview/image/upload/t_icon/v1595370319/platformicons/WindowsTransMed_wyuamc.png',
      'https://res.cloudinary.com/overview/image/upload/t_icon/v1595370318/platformicons/WindowsTransDark_tsafuk.png'
    ],
    links: ['Sawayn - Dach', 'Kirlin, VonRueden and Veum', 'Tillman - Wehner'],
    _id: '5f06634ec9e05c2f42bd380a',
    product_id: 21,
    developer: 'Kuhn - Bailey',
    publisher: 'Graphical User Interface Future',
    system_req: {
      windows: {
        OS: 'windows 10 Future',
        Processor: 'Intel Core i7 7000',
        Memory: '8 GB',
        Graphics: 'NVIDIA GeForce 840 4GB / AMD Radeon 550 4GB',
        DirectX: 'Version 11',
        Network: 'Broadband Internet',
        Storage: '90 GB'
      }
    },
    steam_rating: 55,
    __v: 0
  }
};

export default defaultState;
