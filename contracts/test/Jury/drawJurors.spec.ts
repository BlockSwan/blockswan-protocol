import { expect } from 'chai'
import makeDispute from '../fixtures/makeDispute'

describe('Jury: drawJurors', () => {
    describe('drawing jurors', () => {
        it('should have selected 10 juror', async () => {
            let jurorsAddresses: string[] = []
            const { testEnv, disputeData } = await makeDispute({})
            const { judges } = testEnv
            const { drawnJurors } = disputeData.rounds[0]
            for (let i = 0; i < judges.length; i++) {
                jurorsAddresses.push(judges[i].address)
            }

            expect(jurorsAddresses).to.include.members(drawnJurors)
            expect(drawnJurors.length).to.be.equal(10)
            console.table(drawnJurors)
        })
    })
})
