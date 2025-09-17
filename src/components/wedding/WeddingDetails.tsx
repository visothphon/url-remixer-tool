export const WeddingDetails = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center fade-in">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold wedding-text mb-8">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h1>
        
        <div className="space-y-6">
          <div>
            <p className="text-lg wedding-text">កូនប្រុសនាម</p>
            <h2 className="text-2xl md:text-3xl font-bold wedding-text mt-2">
              សុខអូន (Bee)
            </h2>
          </div>
          
          <div className="my-8">
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
            <p className="wedding-text my-4">ជា</p>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
          </div>
          
          <div>
            <p className="text-lg wedding-text">កូនស្រីនាម</p>
            <h2 className="text-2xl md:text-3xl font-bold wedding-text mt-2">
              សុថាណេតម៉ៅ
            </h2>
          </div>
        </div>
        
        <div className="mt-12 space-y-4">
          <p className="text-lg wedding-text">ដែលនឹងប្រព្រឹត្តទៅនៅ</p>
          <div className="bg-secondary/30 rounded-lg p-6 wedding-glow">
            <h3 className="text-xl md:text-2xl font-bold wedding-text">
              ថ្ងៃទី០៥​ ខែមករា ឆ្នាំ២០២៥
            </h3>
            <p className="text-lg wedding-text mt-2">ម៉ោង ០៥:០០ ល្ងាច</p>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="wedding-text text-sm opacity-80">ទាញឡើងលើ</p>
          <div className="mt-4 animate-bounce">
            <svg className="w-6 h-6 mx-auto wedding-text" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};