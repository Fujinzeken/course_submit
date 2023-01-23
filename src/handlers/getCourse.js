const getCourse = async (Request) => {
  const { id } = Request.params;
  let data;

  await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(
      AIRTABLE_TABLE_NAME
    )}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    }
  )
    .then((res) => res.json())
    .then((result) => (data = result));

  return new Response(JSON.stringify({ info: data }));
};

export default getCourse;
