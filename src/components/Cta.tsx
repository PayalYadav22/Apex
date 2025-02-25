import { motion } from 'motion/react';
import { ctaData } from '@/constants';
import * as Variants from '@/lib/motion';
import { ctaBanner } from '@/assets';
import { Button } from './ui/button';
/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Cta = () => {
  return (
    <section className='section'>
      <div className='container'>
        <motion.div
          variants={Variants.fadeInUp}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='bg-primary rounded-xl border-t border-primary-foreground/30 overflow-hidden grid grid-cols-1 lg:grid-cols-2 lg:items-center'
        >
          <div className='p-8 md:p-16 xl:p-20'>
            <motion.h2
              variants={Variants.fadeIn}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='text-[26px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10'
            >
              {ctaData.text}
            </motion.h2>
            <motion.div
              variants={Variants.fadeIn}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='flex items-center gap-3 lg:gap-4'
            >
              <Button className='bg-foreground text-background hover:bg-foreground/95'>
                Free Trial
              </Button>
              <Button
                variant='outline'
                className='border-current'
              >
                Pricing & Plans
              </Button>
            </motion.div>
          </div>
          <motion.figure
            variants={Variants.fadeInLeft}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='-order-1 pt-14 ps-8 sm:ps-12 md:ps-12 lg:order-none lg:p-0'
          >
            <img
              src={ctaBanner}
              alt='cta banner'
              className='w-full h-full object-contain object-right'
            />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
