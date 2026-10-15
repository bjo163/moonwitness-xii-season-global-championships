// Public read-only status route; no database connection or secrets.
export default function handler(req,res){
 if(req.method!=='GET'){res.setHeader('Allow','GET');return res.status(405).json({error:'method_not_allowed'});}
 res.setHeader('Cache-Control','no-store');
 return res.status(200).json({service:'moonwitness-xii',status:'ok',database:'not_connected',authentication:'not_configured',userProgress:'browser_only',disclosure:'This endpoint does not verify external services.'});
}
