import Link from 'next/link';

export default function Home() {
    return (
        <main className='flex flex-col min-h-screen justify-center items-center p-24 w-full'>
            <div className='flex flex-col items-center space-y-4 w-full'>
                <div className='flex items-center space-x-4'>
                    <div>Mods:</div>
                    <Link
                        href='http://144.22.63.221/zipfiles/mods.zip'
                        className='hover:underline'
                    >
                        mods.zip
                    </Link>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <div>Version: 1.20.1</div>
                </div>
                <div className='flex items-center justify-center w-full'>
                    <div>IP: 144.22.63.221</div>
                </div>
            </div>
        </main>
    );
}
