const getAllCourses = async () => {
  let data;
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400",
  };
  let respHeaders = {
    ...corsHeaders,
  };
  await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}?maxRecords=10&view=Grid%20view`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    }
  )
    .then((res) => res.json())
    .then((result) => (data = result));

  return new Response(JSON.stringify({ info: data }), { headers: respHeaders });
};

export default getAllCourses;
