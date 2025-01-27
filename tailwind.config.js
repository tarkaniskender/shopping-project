module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'picto': "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHUAAAA3CAIAAAC99pKMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHWSURBVHhe7di7ivJQFIbhxMYD4gEUVCxsvRLvwl5QsNGL0AvyDsRKC2uxUUQtBQvx8Gf0zZB/ku2kUJjI94Cw9lpfszbBkyUiIiIiIiIiIiIiIiIiIiIiIiIiIvJCtvPabDaPg7xWuVz+ut/b7fY4y2vZth2jlPfQ/b6X7ve9dL/vpft9L92viMifUSgUqD5ONptNpVIcfpNOp3O5HIcQisUiVaDlcun8UPY6Ho/MIq5Wq7GSB7MgJDwajQYzn/P5TMg1n8+ZfWMShERktVotNvGx7a+/X35g5jOdTkl4MAtCwrFYLOgF2e/35KKJNQwIuegaJJNJcneHw4FBkPF4TI6GGbkIOp1O7GDQ7/eJWlYmk6FrRvSOllnYXCKRIBo1LPAUUctar9e0zIhaVqlUomXmxEL9fsvn81QfrVKpUIVQrVapngp1v7vdjurjPJ6yh8lkQhWC86FF9avHw/wEuQjabrfsYFCv14k6z1osRteM6B0tM3LD4ZBGkNFoRC6aWMOAkIuuwY/vc7PZjEGQbrdLznG9Xmn7kIgs512VTXxI/I+ZT7vdJuHBzOdyuZD41ul0GLp6vR6z6GMlDwZBVqsVIVc8HmfmMxgMCLmazSYzeS/L+gfHzP95bK43PgAAAABJRU5ErkJggg==')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
