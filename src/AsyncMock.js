const products = [
    {
        id: '1',
        name: 'Pasta Frola',
        price: 1600,
        category: 'fruta',
        img: '../pastaFrola.jpg',
        stock: 25,
        description: 'Un postre tradicional de la cocina argentina. Caracterizada por su sabor delicado y la combinación entre la masa que se deshace en la boca y el dulzor de su relleno frutal.'
    },
    {
        id: '2',
        name: 'Red Velvet',
        price: 2000,
        category: 'fruta',
        img: '../redVelvet.jpg',
        stock: 9,
        description: 'Un postre icónico reconocido por su suave textura y su distintivo color granate, que contrasta con su frosting de queso crema. El equilibrio entre la esponjosidad del bizcocho y la suavidad del frosting hacen de la Red Velvet una exquisitez para cualquier ocasión especial.'
    },
    {
        id: '3',
        name: 'Selva Negra',
        price: 2600,
        category: 'chocolate',
        img: '../selvaNegra.jpg',
        stock: 3,
        description: 'Un clásico postre originario de Alemania, El bizcocho de chocolate es esponjoso y se empapa tradicionalmente con licor de cerezas (Kirsch) para realzar su sabor. Entre las capas de bizcocho se intercala una generosa cantidad de cerezas, ya sean frescas, en almíbar o en compota, agregando un toque frutal y ácido.'
    },
    {
        id: '4',
        name: 'Mousse de Chocolate',
        price: 2400,
        category: 'chocolate',
        img: '../mousseDeChocolate.jpg',
        stock: 14,
        description: 'Un postre celestial y ligero que combina la cremosidad del chocolate con una textura aireada y suave. Su sabor intenso a cacao se combina con una sensación suave al paladar, creando una experiencia indulgente y satisfactoria para los amantes del chocolate.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 1000)
    })
}