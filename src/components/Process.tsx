import { motion } from 'motion/react';
import { processData } from '@/constants';
import { processBanner } from '@/assets';
import * as Variants from '@/lib/motion';
/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Process = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='section-head'>
          <motion.p
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-subtitle'
          >
            {processData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {processData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {processData.sectionText}
          </motion.p>
        </div>
        <div className='grid gap-14 lg:items-center lg:grid-cols-2'>
          <div className='grid gap-7 lg:gap-10'>
            {processData.list.map(({ icon, text, title }, index) => (
              <motion.div
                className='flex flex-col gap-4 md:flex-row lg:gap-7'
                variants={Variants.staggerContainer}
                key={index}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
              >
                <motion.div
                  className='w-16 h-16 grid place-items-center rounded-full border border-foreground/5 shrink-0'
                  variants={Variants.fadeInScale}
                >
                  {icon}
                </motion.div>
                <div className='grid gap-2 md:gap-3'>
                  <motion.h3
                    className='text-xl lg:text-2xl'
                    variants={Variants.fadeInLeft}
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    className='text-sm text-muted-foreground md:text-base'
                    variants={Variants.fadeInLeft}
                  >
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className='max-lg:-order-1'>
            <motion.figure
              variants={Variants.fadeInUp}
              initial='start'
              whileInView='end'
              viewport={{ once: true }}
              className='mx-auto bg-primary rounded-3xl max-w-[580px] overflow-hidden p-8 !pb-0 lg:p-12 lg:pb-0'
            >
              <img
                src={processBanner}
                width={500}
                height={528}
                alt='process banner'
                className='w-full h-full object-contain object-bottom'
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
