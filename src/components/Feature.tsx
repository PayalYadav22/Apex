import { motion } from 'motion/react';
import { featureData } from '@/constants';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import FeatureCard from '@/components/core/FeatureCard';
import * as Variants from '@/lib/motion';
/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Feature = () => {
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
            {featureData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {featureData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {featureData.sectionText}
          </motion.p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6'>
          {featureData.features.map(
            ({ icon, iconBoxColor, title, desc, imgSrc }, index) => (
              <FeatureCard
                key={index}
                classes={
                  index < 2
                    ? 'md:col-span-2 lg:col-span-1 xl:col-span-3'
                    : 'xl:col-span-2'
                }
              >
                <>
                  <div className='p-8'>
                    <motion.div
                      variants={Variants.fadeInUp}
                      className={`w-16 h-16 grid place-items-center rounded-full flex-shrink-0 ${iconBoxColor}`}
                    >
                      {icon}
                    </motion.div>
                    <motion.h3
                      variants={Variants.fadeInUp}
                      className='text-foreground text-xl font-medium mt-4 mb-3'
                    >
                      {title}
                    </motion.h3>
                    <motion.p
                      variants={Variants.fadeInUp}
                      className='text-muted-foreground line-clamp-2'
                    >
                      {desc}
                    </motion.p>
                    <motion.div variants={Variants.fadeInUp}>
                      <Button
                        variant='link'
                        className='p-0 h-auto mt-3 text-blue-700'
                      >
                        Learn More <ArrowRight />
                      </Button>
                    </motion.div>
                  </div>
                  {imgSrc && (
                    <motion.figure
                      variants={Variants.fadeInUp}
                      className='p-6 pt-0'
                    >
                      <img
                        src={imgSrc}
                        alt='title'
                      />
                    </motion.figure>
                  )}
                </>
              </FeatureCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;
