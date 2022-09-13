import React, { useContext, useState } from 'react';
import { Songs } from '../context';

function DetailSong() {
    const {song} = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
           <h2 className='text-cyan-500 font-bold text-left'>Now Playing</h2>
           <h2 className='text-neutral-400 text-2xl text-left'>Sing Me To Leep</h2>
           <div className=' mt-5'>
            <img className='w-[200px]] rounded-full ' src={song.links.images[0].url} alt=''/>
           </div >
            <div className='flex justify-evenly items-center mt-10' >
            <img className=' w-[70px]' src={song.links.images[1].url} alt=''/>
                <span className='text-xl text-white'>{song.name}</span>
            </div>
        </div>
    );
}

export default DetailSong;