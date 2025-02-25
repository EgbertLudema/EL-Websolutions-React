import Draggable from '@/components/Draggable';
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="container pt-[140px] relative flex align-center justify-center py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* left column */}
                <div>
                    <div className='flex items-center gap-4 py-4'> 
                        <Draggable /> <h1 className="text-3xl font-bold text-black dark:text-white">Hi, I am Egbert Ludema</h1>
                    </div>
                    <p>
                        Suspendisse a euismod ac convallis suspendisse erat a taciti dui cubilia nostra a in dui a fames scelerisque. 
                        A condimentum a condimentum dictum commodo consectetur sociis a conubia maecenas vestibulum dis porta lorem montes leo 
                        parturient platea ad vivamus eu consectetur maecenas integer ac.
                    </p>
                    <br />
                    <p>
                        Scelerisque vestibulum at sagittis fusce urna libero parturient a euismod cras quam ridiculus nam litora sagittis 
                        fermentum id adipiscing eu ante a aptent ad per ipsum. Lectus ac nibh parturient vitae proin ultrices in vestibulum 
                        venenatis rhoncus parturient a vestibulum felis egestas a a condimentum parturient cras a.
                    </p>
                </div>

                {/* right column */}
                <div className="flex justify-end">
                    <Image 
                        className="bg-neutral-200 dark:bg-neutral-800 transition-all duration-100 rounded-lg shadow-lg" 
                        src="/images/Portret_Egbert_NoBG.png" 
                        width={500} 
                        height={500} 
                        alt="Image of Egbert Ludema" 
                    />
                </div>
            </div>
        </div>
    );
}
  