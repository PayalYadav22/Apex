import { motion } from 'motion/react';
import { reviewData } from '@/constants';
import * as Variants from '@/lib/motion';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Quote } from 'lucide-react';
/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const Review = () => {
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
            {reviewData.sectionSubtitle}
          </motion.p>
          <motion.h2
            variants={Variants.fadeInUp}
            initial='start'
            whileInView='end'
            viewport={{ once: true }}
            className='section-title'
          >
            {reviewData.sectionTitle}
          </motion.h2>
        </div>
        <motion.div
          variants={Variants.staggerContainer}
          initial='start'
          whileInView='end'
          viewport={{ once: true }}
          className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'
        >
          {reviewData.reviewCard.map(
            ({ title, text, reviewAuthor, date }, index) => (
              <motion.div
                variants={Variants.fadeInUp}
                initial='start'
                whileInView='end'
                viewport={{ once: true }}
                key={index}
              >
                <Card className='relative text-white'>
                  <CardHeader>
                    <CardTitle className='text-lg'>{title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm text-muted-foreground line-clamp-3'>
                      {text}
                    </p>
                  </CardContent>
                  <CardFooter className='block'>
                    <p>{reviewAuthor}</p>
                    <p className='text-xs text-muted-foreground'>{date}</p>
                  </CardFooter>
                  <div className='absolute bottom-0 right-3 opacity-5'>
                    <Quote size={80} />
                  </div>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
