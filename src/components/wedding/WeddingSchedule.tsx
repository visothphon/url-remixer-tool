import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

export const WeddingSchedule = () => {
  const addToCalendar = () => {
    const event = {
      title: 'សិរីមង្គលអាពាហ៍ពិពាហ៍ សុខអូន & សុថាណេត',
      start: '20250105T170000Z',
      end: '20250105T220000Z',
      description: 'Wedding celebration of Sokoun and Sothanet',
      location: 'OCIC Building G, Phnom Penh'
    };
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(url, '_blank');
  };

  const openMap = () => {
    window.open('https://maps.app.goo.gl/ofW5qWSRtV4EULJM6', '_blank');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold wedding-text mb-12">
          កម្មវិធីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
        
        <div className="bg-secondary/30 rounded-lg p-8 wedding-glow">
          <h3 className="text-2xl font-bold wedding-text mb-6">
            កម្មវិធីពេលល្ងាច
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-2">
              <Calendar className="w-5 h-5 wedding-text" />
              <p className="wedding-text text-lg">ម៉ោង ០៥:០០ ល្ងាច</p>
            </div>
            
            <p className="wedding-text text-base md:text-lg leading-relaxed">
              ទទួលបដិសណ្ឋារកិច្ចភ្ញៀវកិត្តិយសពិសារភោជនាហាពេលល្ងាច
              <br />
              នៅមជ្ឈមណ្ឌលសន្និបាតនិងពិព័រណ៍អន្តរជាតិជ្រោយចង្វារ (OCIC) អគារ​ G
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button 
                onClick={addToCalendar}
                className="bg-primary hover:bg-primary/90 text-primary-foreground wedding-glow"
              >
                <Calendar className="w-4 h-4 mr-2" />
                កត់ទុកក្នុងប្រតិទិន
              </Button>
              
              <Button 
                onClick={openMap}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground wedding-glow"
              >
                <MapPin className="w-4 h-4 mr-2" />
                បើកផែនទី
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 space-y-4">
          <h4 className="text-xl wedding-text">សម្តេច ទ្រង់ ឯកឧត្តម អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី</h4>
          <p className="wedding-text opacity-80">អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស</p>
          <p className="wedding-text opacity-80">ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល</p>
          <p className="wedding-text opacity-80">ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស-កូនស្រី របស់យើងខ្ញុំ</p>
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h5 className="text-lg wedding-text mb-2">ឪពុកម្តាយកូនប្រុស</h5>
            <p className="wedding-text">លោក ជា សុង</p>
            <p className="wedding-text">អ្នកស្រី ហ៊ុង អ៊ី</p>
          </div>
          <div>
            <h5 className="text-lg wedding-text mb-2">ឪពុកម្តាយកូនស្រី</h5>
            <p className="wedding-text">អ្នកស្រី យ៉ែម ណាវី</p>
          </div>
        </div>
      </div>
    </section>
  );
};