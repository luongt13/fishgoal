export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/goals`;
export const userURL = `https://api.airtable.com/v0/${process.env.REACT_APP_TABLE_BASE}/userdata`;
export const config = {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
    },
};