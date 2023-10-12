const fetcher = async () => {
    const response = await fetch(`https://eldenring.fanapis.com/api/bosses`);
    const data = await response.json();
console.log(data) 
}

fetcher()
