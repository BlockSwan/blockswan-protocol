import { expect } from 'chai'
import makeDispute from '../fixtures/makeDispute'

describe('Jury: drawJurors', () => {
    describe('drawing jurors', () => {
        it('should have selected one juror', async () => {
            let jurorsAddresses: string[] = []
            const { testEnv, disputeData } = await makeDispute({})
            const { Jury, judges } = testEnv
            for (let i = 0; i < judges.length; i++) {
                jurorsAddresses.push(judges[i].address)
            }
            const drawnJurors = await Jury.drawJurors(
                1,
                disputeData.disputeId,
                0
            )
            expect(jurorsAddresses).to.include.members(drawnJurors)
            expect(drawnJurors.length).to.be.equal(1)
        })
        it('should have selected one juror', async () => {
            let jurorsAddresses: string[] = []
            const { testEnv, disputeData } = await makeDispute({})
            const { Jury, judges } = testEnv
            for (let i = 0; i < judges.length; i++) {
                jurorsAddresses.push(judges[i].address)
            }
            const drawnJurors = await Jury.drawJurors(
                10,
                disputeData.disputeId,
                0
            )
            expect(jurorsAddresses).to.include.members(drawnJurors)
            expect(drawnJurors.length).to.be.equal(10)
            console.table(drawnJurors)
        })
    })
})
