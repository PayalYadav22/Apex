import { motion } from 'motion/react';
import { brands } from '@/assets';
import * as variants from '@/lib/motion';
/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Brand = () => {
  return (
    <section className='section'>
      <div className='container max-w-screen-lg'>
        <motion.p
          variants={variants.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='text-center'
        >
          Empowering data-driven insights for today’s startups and tomorrow’s
          leaders.
        </motion.p>
        <motion.div
          variants={variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='flex justify-center flex-wrap mt-5 md:mt-10 gap-5 md:gap-10'
        >
          {brands.map((brand, index) => (
            <motion.figure
              variants={variants.fadeInUp}
              key={index}
            >
              <img
                src={brand}
                alt='brand-image'
                className='opacity-[0.6]'
              />
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brand;
