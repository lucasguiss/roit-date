import { expect } from 'chai';
import { describe, it } from 'mocha';
import { DateFormat } from '../../src';

describe('DateFormat', () => {
    let sut = DateFormat.getInstance()

    describe('formatDate()', () => {
        it('Should be able to format dd/mm/yyyy to ISO format', () => {
            const result = sut.formatDate('12/01/2021')
 
            const expected = new Date('2021-01-12 03:00').toISOString()

            expect(result).to.be.deep.equal(expected)
         })

         it('Should be able to format yyyy/mm/dd to ISO format', () => {
            const result = sut.formatDate('2021/01/12')
 
            const expected = new Date('2021-01-12 03:00').toISOString()
 
            expect(result).to.be.deep.equal(expected)
         })

         it('Should be able to format yyyy-mm-dd to ISO format', () => {
            const result = sut.formatDate('2021-01-12')
 
            const expected = new Date('2021-01-12 03:00').toISOString()
 
            expect(result).to.be.deep.equal(expected)
         })

         it('Should be able to format yyyy-mm-dd HH:mm to ISO format', () => {
            const result = sut.formatDate('2021-01-12 03:00')
 
            const expected = new Date('2021-01-12 06:00').toISOString()
 
            expect(result).to.be.deep.equal(expected)
         })

         it('Should return same input date if already is in ISO format with timezone', () => {
            const result = sut.formatDate('2021-01-12T03:00:00.000Z')

            const expected = new Date('2021-01-12 00:00').toISOString()

            expect(result).to.be.deep.equal(expected)
         })
    })

    describe('formatCompetence()', () => {
        it('Should be able to parse a ISO format to MM/yyyy', () => {
            const result = sut.formatCompetence('2021-01-12T06:00:00.000Z')

            const expected = '01/2021'

            expect(result).to.be.deep.equal(expected)
        })
    })

})