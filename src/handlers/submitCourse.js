const submitCourse = async (Request) => {
  let data;
  const body = await Request.json();

  const { name, link, newTags } = body;

  const reqBody = {
    fields: {
      Name: name,
      Link: link,
      Tags: newTags,
    },
  };
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS,",
    "Access-Control-Max-Age": "86400",
  };
  let respHeaders = {
    ...corsHeaders,
    "Access-Control-Allow-Headers": Request.headers.get(
      "Access-Control-Request-Headers"
    ),
  };
  await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}`,
    {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-type": `application/json`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    }
  )
    .then((res) => res.json())
    .then((result) => (data = result));

  return new Response(JSON.stringify({ msg: data }), { headers: respHeaders });
};

export default submitCourse;
