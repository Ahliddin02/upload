export default function Preview({ files }) {
  if (!files.length) {
    return null;
  }
  return files.map((file) => (
    <img style={{ maxWidth: "100px" }} src={`//localhost:8000/${file.filename}`} alt={file.originalname} />
  ));
}
