import type { PageLoad } from "./$types";

const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

export interface QuakeInfo {
    id: string;
    mag: number;
    place: string;
    title: string;
    time: number;
    updated_at: number;
}

export const load: PageLoad = async () => {
   const res = await fetch(url); 
   const data = await res.json();

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const features: Array<any> = data.features;
   
   const reports = features.map((feature) => {
    const property = feature.properties;
    
    const info: QuakeInfo = {
        id: feature.id,
        mag: property.mag,
        place: property.place,
        time: property.time,
        title: property.title,
        updated_at: property.updated,
    };

    return info;
   })

   return {
    reports: reports
   };
};