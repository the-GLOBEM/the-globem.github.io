export default function PaperButtons({flagBreakLine = false}) {
    return (
        <>
        <button className="w-3/7 inline-flex items-center h-10 px-5 text-stone-800 transition-colors duration-150 \
        bg-blue-400 rounded-lg  \
        focus:shadow-outline hover:bg-blue-300"
        onClick ={() => {window.open('https://openreview.net/pdf?id=GKOa7yNH8Uh','_blank')}}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
        <span>&nbsp; &nbsp;Paper - GLOBEM Datasets</span>
        </button>
        
        {(() => {
            if (flagBreakLine) {
            return (
                <div>
                <br/>
                </div>
            )
            } else {
            return (
                <>&nbsp; &nbsp; &nbsp; &nbsp;</>
            )
            }
        })()}

        <button className="w-3/7 inline-flex items-center h-10 px-5 text-stone-800 transition-colors duration-150\
        bg-emerald-300 rounded-lg \
        focus:shadow-outline hover:bg-emerald-200"
        onClick ={() => {window.open('https://orsonxu.com/wp-content/uploads/Projects/GLOBEM/GLOBEM_IMWUT22.pdf','_blank')}}
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z"/></svg>
        <span>&nbsp; &nbsp;Paper - GLOBEM Platform</span>
        </button>
        </>
    );
}