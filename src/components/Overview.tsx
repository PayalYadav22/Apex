import { motion } from 'motion/react';
import { overviewData } from '@/constants';
import { overviewBanner } from '@/assets';
import * as Variants from '@/lib/motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReactPlayer from 'react-player/youtube';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Overview = () => {
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
            {overviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {overviewData.sectionTitle}
          </motion.h2>
          <motion.p
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-text'
          >
            {overviewData.sectionText}
          </motion.p>
        </div>
        <motion.div
          variants={Variants.fadeInScale}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='relative max-w-4xl mx-auto shadow-xl'
        >
          <figure>
            <img
              src={overviewBanner}
              width={900}
              height={601}
              alt=''
            />
          </figure>

          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant='secondary'
                size='icon'
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150'
              >
                <div className='sr-only'>Play video</div>
                <Play
                  fill='#fff'
                  size={50}
                />
              </Button>
            </DialogTrigger>
            <DialogContent className='p-0 overflow-hidden max-w-[640px] xl:max-w-[1000px]'>
              <AspectRatio ratio={16 / 9}>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=FxgM9k1rg0Q'
                  style={{
                    minWidth: '100%',
                    maxWidth: '100%',
                    minHeight: '100%',
                    maxHeight: '100%',
                  }}
                />
              </AspectRatio>
            </DialogContent>
          </Dialog>
        </motion.div>
        <div className='relative max-w-4xl mx-auto grid grid-cols-1 gap-5 mt-8 md:mt-16  xl:grid-cols-2  xl:items-center'>
          <motion.p
            variants={Variants.fadeInRight}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left'
          >
            {overviewData.listTitle}
          </motion.p>
          <motion.div
            variants={Variants.staggerContainer}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8'
          >
            {overviewData.list.map(({ title, text }, index) => (
              <motion.div
                variants={Variants.fadeInLeft}
                className='text-center'
                key={index}
              >
                <h3 className='text-3xl'>{title}</h3>
                <p className='text-muted-foreground'>{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
