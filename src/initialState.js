export default {
  // loading: false,
  // error: false,
  // jwt: null,
  cart: [],
  buyer: [],
  orders: [],
  categories: [
    {
      id: '1',
      name: 'Gliserina',
      image:
        'https://assets.entrepreneur.com/content/3x2/2000/20180422215601-jabon-artesanal.jpeg',
    },
    {
      id: '2',
      name: 'Jabon',
      image:
        'https://assets.entrepreneur.com/content/3x2/2000/20180422215601-jabon-artesanal.jpeg',
    },
    {
      id: '3',
      name: 'Natural',
      image:
        'https://assets.entrepreneur.com/content/3x2/2000/20180422215601-jabon-artesanal.jpeg',
    },
    {
      id: '4',
      name: 'Artificial',
      image:
        'https://assets.entrepreneur.com/content/3x2/2000/20180422215601-jabon-artesanal.jpeg',
    },
  ],
  products: [
    {
      id: '1',
      name: 'Soap1',
      categories: ['Gliserina', 'Natural', 'Jabon'],
      priceDollars: 50,
      priceCOP: 150000,
      image:
        'https://assets.entrepreneur.com/content/3x2/2000/20180422215601-jabon-artesanal.jpeg',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam quas corporis natus aliquam esse enim magni recusandae autem quibusdam exercitationem architecto voluptate sit unde obcaecati quisquam. Repellat vel placeat atque molestiae doloremque! Voluptatem ab nostrum nobis temporibus quia libero voluptate, officia reiciendis obcaecati nihil debitis laboriosam, quisquam sapiente, molestias recusandae voluptatum quaerat cumque.',
      cantidad: 10,
    },
    {
      id: '2',
      name: 'Soap2',
      categories: ['Gliserina', 'Natural', 'Jabon'],
      priceDollars: 10,
      priceCOP: 40000,
      image:
        'https://www.consumer.es/wp-content/uploads/2019/07/img_jabones-artesanos-salud-hd-1280x720.jpg',
      description:
        'Lorem am quas corporis natus aliquausdam exercitationem architecto voluptate sit unde obcaecati quisquam. Repellat vel placeat atque molestiae doloremque! Voluptatem ab nostrum nobis temporibus quia libero voluptate, officia reiciendis obcaecati nihil debitis laboriosam, quisquam sapiente, molestias recusandae voluptatum quaerat cumque.',
      cantidad: 10,
    },
    {
      id: '3',
      name: 'Soap3',
      categories: ['Gliserina', 'Natural', 'Jabon'],
      priceDollars: 30,
      priceCOP: 120000,
      image:
        'https://www.monederosmart.com/wp-content/uploads/2020/03/Khlapushyna-61088961_m-e1589822530363.jpg',
      description:
        '        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam quas corporis natus aliquam esse enim magni recusandae autem quibusdam exercitationem architecto voluptate sit unde obcaecati quisquam. Repellat vel placeat atque molestiae doloremque! Voluptatem ab nostrum nobis temporibus quia libero voluptate, officia reiciendis obcaecati nihil debitis laboriosam, quisquam sapiente, molestias recusandae voluptatum quaerat cumque.',
      cantidad: 10,
    },
    {
      id: '4',
      name: 'Soap4',
      categories: ['Natural', 'Jabon'],
      priceDollars: 40,
      priceCOP: 130000,
      image:
        'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/01/como-puedo-hacer-jabones-de-glicerina.jpg',
      description:
        '        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam quas corporis natus aliquam esse enim magni recusandae autem quibusdam exercitationem architecto voluptate sit unde obcaecati quisquam. Repellat vel placeat atque molestiae doloremque! Voluptatem ab nostrum nobis temporibus quia libero voluptate, officia reiciendis obcaecati nihil debitis laboriosam, quisquam sapiente, molestias recusandae voluptatum quaerat cumque.',
      cantidad: 10,
    },
    {
      id: '5',
      name: 'Shampoo',
      categories: ['Gliserina', 'Natural', 'Jabon'],
      priceDollars: 40,
      priceCOP: 130000,
      image:
        'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/01/como-puedo-hacer-jabones-de-glicerina.jpg',
      description:
        '        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam quas corporis natus aliquam esse enim magni recusandae autem quibusdam exercitationem architecto voluptate sit unde obcaecati quisquam. Repellat vel placeat atque molestiae doloremque! Voluptatem ab nostrum nobis temporibus quia libero voluptate, officia reiciendis obcaecati nihil debitis laboriosam, quisquam sapiente, molestias recusandae voluptatum quaerat cumque.',
      cantidad: 10,
    },
    {
      id: '6',
      name: 'Crema',
      categories: ['Gliserina', 'Natural', 'Jabon'],
      priceDollars: 40,
      priceCOP: 130000,
      image:
        'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/01/como-puedo-hacer-jabones-de-glicerina.jpg',
      description:
        '        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam quas corporis natus aliquam esse enim magni recusandae autem quibusdam exercitationem architecto voluptate sit unde obcaecati quisquam. Repellat vel placeat atque molestiae doloremque! Voluptatem ab nostrum nobis temporibus quia libero voluptate, officia reiciendis obcaecati nihil debitis laboriosam, quisquam sapiente, molestias recusandae voluptatum quaerat cumque.',
      cantidad: 10,
    },
    {
      id: '7',
      name: 'Jabon',
      categories: ['Gliserina', 'Natural', 'Jabon'],
      priceDollars: 40,
      priceCOP: 130000,
      image:
        'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/01/como-puedo-hacer-jabones-de-glicerina.jpg',
      description:
        '        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, quam quas corporis natus aliquam esse enim magni recusandae autem quibusdam exercitationem architecto voluptate sit unde obcaecati quisquam. Repellat vel placeat atque molestiae doloremque! Voluptatem ab nostrum nobis temporibus quia libero voluptate, officia reiciendis obcaecati nihil debitis laboriosam, quisquam sapiente, molestias recusandae voluptatum quaerat cumque.',
      cantidad: 0,
    },
  ],
};
