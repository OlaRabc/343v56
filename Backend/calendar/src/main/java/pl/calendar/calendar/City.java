package pl.calendar.calendar;

import lombok.*;

import java.util.Objects;

@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor
public class City {
    private Integer cityId;
    private String name;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        City city = (City) o;
        return Objects.equals(cityId, city.cityId) && Objects.equals(name, city.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(cityId, name);
    }
}
