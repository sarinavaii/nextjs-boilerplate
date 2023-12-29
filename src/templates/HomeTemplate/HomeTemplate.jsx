import { XButton } from '@atoms/XButton';
import { XLink } from '@atoms/XLink';

const HomeTemplate = () => {
    return (
        <div className='h-screen bg-gray-800 flex flex-col text-white items-center justify-center text-center'>
            <h1 className='font-bold text-2xl'>Hello there, friend!</h1>
            <p className='text-gray-400 mb-8'>Choose the template you want to see...</p>
            <div className='flex gap-4 flex-wrap'>
                <XButton component={XLink} href='/dashboard'>
                    Dashboard Template
                </XButton>
                <XButton component={XLink} href='/landing'>
                    Landing Template
                </XButton>
            </div>
        </div>
    );
};

export default HomeTemplate;
