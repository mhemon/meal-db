import React from 'react';

const About = () => {
    return (
        <div className='my-container'>
            <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
                <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
                    <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
                        <span className='relative inline-block'>
                            <svg
                                viewBox='0 0 52 24'
                                fill='currentColor'
                                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                            >
                                <defs>
                                    <pattern
                                        id='70326c9b-4a0f-429b-9c76-792941e326d5'
                                        x='0'
                                        y='0'
                                        width='.135'
                                        height='.30'
                                    >
                                        <circle cx='1' cy='1' r='.7' />
                                    </pattern>
                                </defs>
                                <rect
                                    fill='url(#70326c9b-4a0f-429b-9c76-792941e326d5)'
                                    width='52'
                                    height='24'
                                />
                            </svg>
                            <span className='relative'>A</span>
                        </span>{' '}
                        foodie tastes a thousand flavors before he dines
                    </h2>
                    <p className='text-base text-gray-700 md:text-lg'>
                    Discover the magic of food with us. We inspire and empower food lovers to explore new flavors, techniques, and cuisines. Join our culinary journey now.
                    </p>
                </div>
            </div>
            <div className='max-w-screen-xl sm:mx-auto'>
                <div className='grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2'>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            How can I make sure my meat is cooked to the right temperature?
                            </p>
                            <p className='text-gray-700'>
                            The best way to ensure your meat is cooked to the right temperature is to use a meat thermometer. Simply insert the thermometer into the thickest part of the meat, away from any bones or gristle. 
                                <br />
                                <br />
                                The temperature you're aiming for will depend on the type of meat and your personal preferences, but generally, a safe internal temperature for beef, pork, and lamb is 145°F, while poultry should reach a temperature of 165°F.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            What's the difference between a dry rub and a marinade?
                            </p>
                            <p className='text-gray-700'>
                            A dry rub is a mixture of spices and herbs that is rubbed onto the surface of meat before cooking. 
                                <br />
                                <br />
                                It forms a flavorful crust that enhances the natural taste of the meat. A marinade, on the other hand, is a liquid mixture of herbs, spices, and acidic ingredients like vinegar or citrus juice. The meat is soaked in the marinade for several hours, allowing the flavors to penetrate the meat and make it more tender. Both methods can be used to add flavor and tenderness to meat, but they have different textures and cooking techniques.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            What's the difference between baking powder and baking soda?
                            </p>
                            <p className='text-gray-700'>
                            Baking powder and baking soda are both leavening agents that are used to help baked goods rise. However, they work in slightly different ways. Baking soda is a base that reacts with acidic ingredients like vinegar or lemon juice to create carbon dioxide bubbles, which cause the batter or dough to rise.
                            </p>
                        </div>
                    </div>
                    <div className='space-y-8'>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            How can I make my own pasta at home?
                            </p>
                            <p className='text-gray-700'>
                            Making fresh pasta at home is easier than you might think! All you need is flour, eggs, and a rolling pin or pasta machine. Start by making a well in the center of the flour and cracking the eggs into it. 
                                <br />
                                <br />
                                Then, use a fork to whisk the eggs and gradually incorporate the flour until a dough forms. Knead the dough for several minutes until it becomes smooth and elastic, then let it rest for at least 30 minutes. Roll out the dough using a rolling pin or pasta machine, then cut it into your desired shape. Cook the pasta in boiling salted water for a few minutes until it's tender, then serve with your favorite sauce.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            What's the best way to store fresh herbs?
                            </p>
                            <p className='text-gray-700'>
                            Fresh herbs can add a burst of flavor to any dish, but they can also spoil quickly if not stored properly. 
                                <br />
                                <br />
                                The best way to store fresh herbs is to wrap them in a damp paper towel and place them in a plastic bag or container. This will help to keep them hydrated and prevent them from drying out. Alternatively, you can store them in a jar of water like you would with flowers, changing the water every few days. Another option is to chop the herbs and freeze them in an ice cube tray with a bit of water or oil. This way, you can easily add them to dishes as needed.
                            </p>
                        </div>
                        <div>
                            <p className='mb-4 text-xl font-medium'>
                            What are some healthy alternatives to sugar?
                            </p>
                            <p className='text-gray-700'>
                            If you're looking for a healthier alternative to sugar, there are several options available. One of the most popular options is honey, which is a natural sweetener that is packed with antioxidants and has antibacterial properties. Maple syrup is another great alternative that is high in antioxidants and has a lower glycemic index than sugar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;