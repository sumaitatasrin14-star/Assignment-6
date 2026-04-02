
import { use } from 'react';
import ModalCard from './ModalCard';
const Modals = ({modalPromise,carts, setCarts}) => {
    const modals = use(modalPromise)
    
    return (
        <div>
            <div className='text-center mt-10'>
                <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 py-15 px-15'>
                {modals.map(modal=>(
                <ModalCard key={modal.id} modal={modal} carts={carts} setCarts={setCarts}/>
                    ))}
            </div>
        </div>
    );
};

export default Modals;