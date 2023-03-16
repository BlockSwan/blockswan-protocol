const getIpfsData = async (req: Request, res: Response) => {
    try {
        return res.status(400).json({ name: 'Missing CID' })
    } catch (err) {
        console.error(err)
    }
}
