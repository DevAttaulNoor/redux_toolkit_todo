export const formatingTimewithInitials = (timestamp) => {
    const currentDate = new Date();
    const postDate = timestamp
    const seconds = Math.floor((currentDate - postDate) / 1000);
    const secondsDifference = Math.max(seconds, 1);
    const periods = {
        D: 315360000,
        Y: 31536000,
        M: 2628000,
        w: 604800,
        d: 86400,
        h: 3600,
        m: 60,
        s: 1,
    };

    let elapsed = 0;
    let granularity = 0;
    let unit = '';

    for (const period in periods) {
        elapsed = Math.floor(secondsDifference / periods[period]);

        if (elapsed >= 1) {
            granularity = elapsed;
            unit = period;
            break;
        }
    }
    return `${granularity}${unit}${granularity > 1 ? '' : ''}`;
};