export default function App(): React.ReactNode {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <input
        type="date"
        name="timesheet-date"
        id="timesheet-date"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <div>{'Hello world!!!'}</div>
    </div>
  );
}
