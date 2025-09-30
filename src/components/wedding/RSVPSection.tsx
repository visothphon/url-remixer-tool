import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export const RSVPSection = () => {
  const [attending, setAttending] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleRSVP = (willAttend: boolean) => {
    setAttending(willAttend);
    setSubmitted(true);
    
    toast({
      title: willAttend ? "សូមអរគុណ!" : "សោកស្តាយ",
      description: willAttend 
        ? "យើងរងចាំអ្នកនៅថ្ងៃមង្គលរបស់យើង!"
        : "សូមអរគុណសម្រាប់ការផ្តល់ដំណឹង",
      duration: 3000,
    });
  };

  const resetResponse = () => {
    setAttending(null);
    setSubmitted(false);
  };

  return (
    <section className="py-20 px-6 fade-in">
      <div className="max-w-2xl mx-auto text-center fade-in">
        {!submitted ? (
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold wedding-text">
              លោកអ្នកត្រូវបានអញ្ចើញ
            </h2>
            <p className="text-xl wedding-text">
              អោយចូលរួមក្នុងពិធីអាពាហ៍ពិពាហ៍របស់យើង​ខ្ញុំ!
            </p>
            <p className="text-lg wedding-text opacity-80">
              Today is our special day
            </p>
            <p className="text-lg wedding-text opacity-80">
              We can't wait to celebrate with you!
            </p>
            
            <div className="bg-secondary/30 rounded-lg p-6 wedding-glow">
              <p className="text-xl font-bold wedding-text mb-4">
                ថ្ងៃអាទិត្យ ទី០៥​ ខែមករា ឆ្នាំ២០២៥
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="wedding-text text-lg">
                តើអ្នកអាចចូលរួមបានទេ?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleRSVP(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground wedding-glow text-lg px-8 py-3"
                >
                  បាទ/ចាស ខ្ញុំនឹងចូលរួម
                </Button>
                <Button
                  onClick={() => handleRSVP(false)}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground wedding-glow text-lg px-8 py-3"
                >
                  សូមអភ័យទោស ខ្ញុំមិនអាចចូលរួម
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 fade-in">
            {attending ? (
              <div>
                <h2 className="text-3xl font-bold wedding-text mb-4">
                  សូមអរគុណ!
                </h2>
                <p className="text-lg wedding-text">
                  យើងរីករាយជាខ្លាំងដែលអ្នកនឹងចូលរួមជាមួយយើង
                </p>
                <p className="text-lg wedding-text">
                  នៅថ្ងៃមង្គលរបស់យើង!
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl font-bold wedding-text mb-4">
                  សោកស្តាយដែលអ្នកមិនបានចូលរួម
                </h2>
                <p className="text-lg wedding-text">
                  សូមអរគុណសម្រាប់ការផ្តល់ជាដំណឹងទុកជាមុន
                </p>
                <p className="text-lg wedding-text">
                  អំពីការចូលរួមរបស់អ្នក។
                </p>
              </div>
            )}
            
            <Button
              onClick={resetResponse}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              កែប្រែចម្លើយរបស់អ្នក
            </Button>
          </div>
        )}
        
        {/* Footer */}
        <div className="mt-20 pt-12 border-t border-primary/20 weeding-text">
          <div className="wedding-text opacity-60 text-sm space-y-2 !text-[#e70ab2]">
            <p className='!text-[#e70ab2]'>តើលោកអ្នកចាប់អារម្មណ៍នឹងប្រើប្រាស់សេវាកម្មរបស់ពួកយើងដែរឬទេ?</p>
            <p>ទាក់ទងមកកាន់ពួកយើងឥឡូវនេះ</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4 !text-[#e70ab2]">
              <a href="tel:098456866" className="!text-[#e70ab2] hover:opacity-80">
                លេខទូរស័ព្ទ: 016667892
              </a>
              <a href="mailto:ananisai.kh@gmail.com" className="!text-[#e70ab2] hover:opacity-80">
                E-mail: tunsinchhiv@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};