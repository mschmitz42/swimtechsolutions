


export default function ClientPage({
    params: { userId },
  }: {
    params: { userId: string }
  }) {
    return (
        <>
            <div className="p-5 mb-5">
                <h1 className="blue">{userId}</h1>
            </div>

        </>
    );
}