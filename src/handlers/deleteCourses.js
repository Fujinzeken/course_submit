const deleteCourses = async (Request) => {
  const { id } = Request.params;
  let data;
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS,DELETE",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    "Access-Control-Allow-Credentials": true,
  };
  let respHeaders = {
    ...corsHeaders,
  };

  if (Request.method === "OPTIONS") {
    let response = new Response(
      null,
      { headers: { respHeaders } },
      { status: 200 }
    );
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  }
  await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
    .then((res) => res.json())
    .then((result) => (data = result));

  return new Response(JSON.stringify({ msg: data }), { headers: respHeaders });
};

export default deleteCourses;
