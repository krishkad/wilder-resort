"use client";

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';

const BookingSection = () => {
  const [arrivalDate, setArrivalDate] = useState<Date>();
  const [departureDate, setDepartureDate] = useState<Date>();
  const [guests, setGuests] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [availabilityResult, setAvailabilityResult] = useState<string | null>(null);

  const handleCheckAvailability = async () => {
    setIsChecking(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsChecking(false);
    setAvailabilityResult('Great news! We have rooms available for your selected dates.');
  };

  return (
    <section className="py-20 gradient-forest">
      <div className="max-w-[1444px] mx-auto px-8 max-md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Check Availability
            </h2>
            <p className="text-xl text-cream-200">
              Find your perfect dates for an unforgettable forest retreat
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Arrival Date */}
              <div className="space-y-2">
                <label className="text-cream-100 font-medium">Arrival Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !arrivalDate && "text-cream-300"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {arrivalDate ? format(arrivalDate, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={arrivalDate}
                      onSelect={setArrivalDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Departure Date */}
              <div className="space-y-2">
                <label className="text-cream-100 font-medium">Departure Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !departureDate && "text-cream-300"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="text-cream-100 font-medium">Guests</label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select guests" className="text-cream-300" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5+">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>    
              </div>

              {/* Promo Code */}
              <div className="space-y-2">
                <label className="text-cream-100 font-medium">Promo Code</label>
                <Input
                  placeholder="Enter code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-cream-300"
                />
              </div>
            </div>

            <Button
              onClick={handleCheckAvailability}
              disabled={isChecking || !arrivalDate || !departureDate || !guests}
              className="w-full bg-gold-500 hover:bg-gold-600 text-forest-900 font-semibold py-4 text-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isChecking ? 'Checking Availability...' : 'Check Availability'}
            </Button>

            {/* Availability Result */}
            {availabilityResult && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg animate-fade-in">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-cream-100 font-medium">{availabilityResult}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;